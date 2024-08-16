pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                script {
                    sh 'docker-compose up --build -d'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}