FROM openjdk
WORKDIR usr/src
ADD ./target/eureka-server-0.0.1-SNAPSHOT.jar /usr/src/eureka-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","eureka-service-0.0.1-SNAPSHOT.jar"]
