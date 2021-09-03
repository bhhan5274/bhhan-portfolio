pipeline {
    agent any

    environment {
        SHA = sh(returnStdout: true, script: 'git rev-parse HEAD')
        DOCKER_USERNAME = credentials("DOCKER_USERNAME")
        DOCKER_PASSWORD = credentials("DOCKER_PASSWORD")
        SECRET_FILE = credentials("KUBERNETES_DEPLOY_ACCOUNT_FILE")
        ZONE = credentials("ZONE")
        PROJECT_NAME = credentials("PROJECT_NAME")
        CLUSTER_NAME = credentials("CLUSTER_NAME")
    }

    parameters {
        booleanParam(name: "PORTFOLIO", defaultValue: false, description: "Update portfolio")
        booleanParam(name: "DEPLOY", defaultValue: false, description: "Deploy services")
        booleanParam(name: "DESTROY", defaultValue: false, description: "Destroy services")
    }

    stages {
        stage("docker-hub / gcp login") {
            steps {
                sh '''
                    echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
                    gcloud auth activate-service-account --key-file $SECRET_FILE
                    gcloud config set project $PROJECT_NAME
                    gcloud config set compute/zone $ZONE
                    gcloud container clusters get-credentials $CLUSTER_NAME
                '''
            }
        }

        stage("build") {
            when { expression { params.PORTFOLIO == true }}
            steps {
                sh '''
                    docker build -t hoya0220/portfolio-service:latest -t hoya0220/portfolio-service:$SHA .
                    docker push hoya0220/portfolio-service:latest
                    docker push hoya0220/portfolio-service:$SHA
                '''
            }
        }

        stage("deploy") {
            when { expression { params.DEPLOY == true }}
            steps {
                sh 'kubectl apply -f ./deployment/portfolio-service.yaml'
            }
        }

        stage("update portfolio") {
            when { expression { params.PORTFOLIO == true }}
            steps {
                sh 'kubectl set image deployments/portfolio-deployment portfolio=hoya0220/portfolio-service:$SHA'
            }
        }

        stage("destroy") {
            when { expression { params.DESTROY == true }}
            steps {
                sh 'kubectl delete -f ./deployment/portfolio-service.yaml'
            }
        }
    }

    post {
        success {
            echo "test success"
        }

        failure {
            echo "test failure"
        }
    }
}