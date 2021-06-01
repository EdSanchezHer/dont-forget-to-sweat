CREATE TYPE "goal" AS ENUM (
  'weight-loss',
  'strength-training',
  'general-fitness',
  'conditioning',
  'muscle-tone'
);

CREATE TYPE "type" AS ENUM (
  'power-lift',
  'machine',
  'cardio'
);

CREATE TYPE "group" AS ENUM (
  'arms',
  'chest',
  'legs',
  'back',
  'cardio',
  'core'
);

CREATE TABLE "Users" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "full_name" varchar(75),
  "email" email UNIQUE NOT NULL,
  "password" password NOT NULL,
  "body_weight" int,
  "body_fat_percentage" "decimal(4, 2)",
  "fitness_level" goal NOT NULL,
  "created_at" timestamp NOT NULL,
  "modified_at" timestamp NOT NULL
);

CREATE TABLE "Exercises" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "title" varchar(75) NOT NULL,
  "muscle_Id" varchar(50),
  "exercise_type" type NOT NULL,
  "description" text,
  "link_to_vid" varchar(255),
  "tips" varchar(50),
  "conditioning" boolean DEFAULT false,
  "spotter" boolean DEFAULT false
);

CREATE TABLE "User_Dashboard" (
  "id" int PRIMARY KEY,
  "user_id" int NOT NULL,
  "routine_id" int NOT NULL,
  "tracked" max,
  "PR" int
);

CREATE TABLE "Routines" (
  "id" SERIAL PRIMARY KEY,
  "title" varchar(50),
  "weight" int DEFAULT null,
  "resistance" int DEFAULT null,
  "reps" int DEFAULT null,
  "sets" int DEFAULT null,
  "distance" int DEFAULT null,
  "time" int DEFAULT null,
  "exercises_Id" int NOT NULL,
  "exercise_A" int NOT NULL,
  "exercise_B" int NOT NULL,
  "exercise_C" int NOT NULL,
  "exercise_D" int,
  "exercise_E" int,
  "exercise_F" int,
  "tags" text,
  "expires" boolean DEFAULT false,
  "expiration" datetime
);

CREATE TABLE "Muscles" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" varchar(50) NOT NULL,
  "body_part" group NOT NULL,
  "body_region_img" varchar(50)
);

CREATE TABLE "Quotes" (
  "id" SERIAL PRIMARY KEY,
  "author" varchar(75),
  "quote" text
);

CREATE TABLE "Archives" (
  "id" SERIAL PRIMARY KEY,
  "saved" date,
  "users_id" int NOT NULL,
  "arc_data" varchar,
  "tags" varchar
);

ALTER TABLE "Muscles" ADD FOREIGN KEY ("id") REFERENCES "Exercises" ("muscle_Id");

ALTER TABLE "Users" ADD FOREIGN KEY ("id") REFERENCES "User_Dashboard" ("user_id");

ALTER TABLE "Routines" ADD FOREIGN KEY ("id") REFERENCES "User_Dashboard" ("routine_id");

ALTER TABLE "Exercises" ADD FOREIGN KEY ("id") REFERENCES "Routines" ("exercises_Id");

ALTER TABLE "Archives" ADD FOREIGN KEY ("users_id") REFERENCES "Users" ("id");
