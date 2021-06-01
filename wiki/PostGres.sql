CREATE TYPE "goal" AS ENUM (
  'weight-loss',
  'strength-training',
  'general-fitness',
  'conditioning',
  'muscle-tone'
);

CREATE TYPE "group" AS ENUM (
  'arms',
  'chest',
  'legs',
  'back',
  'cardio',
  'core'
);

CREATE TYPE "type" AS ENUM (
  'power-lift',
  'machine',
  'cardio'
);

CREATE TABLE "Users" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "full_name" varchar(75),
  "email" email UNIQUE NOT NULL,
  "hashed_password" password NOT NULL,
  "body_weight" int,
  "body_fat_percentage" "decimal(4, 2)",
  "fitness_level" goal NOT NULL,
  "created_at" timestamp NOT NULL,
  "modified_at" timestamp NOT NULL
);

CREATE TABLE "Exercises" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "title" varchar(75) NOT NULL,
  "exercise_type" type NOT NULL,
  "description" text,
  "link_to_vid" varchar(255),
  "tips" varchar(50),
  "spotter" boolean DEFAULT false,
  "muscle" varchar(50) NOT NULL,
  "body_part" group NOT NULL,
  "body_region_img" varchar(50)
);

CREATE TABLE "Routines" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int NOT NULL,
  "title" varchar(50),
  "time" int DEFAULT null,
  "tags" text,
  "expires" boolean DEFAULT false,
  "expiration" datetime
);

CREATE TABLE "Workouts" (
  "id" SERIAL PRIMARY KEY,
  "weight" int DEFAULT null,
  "resistance" int DEFAULT null,
  "reps" int DEFAULT null,
  "sets" int DEFAULT null,
  "distance" int DEFAULT null,
  "exercise_id" int UNIQUE NOT NULL
);

CREATE TABLE "Workouts_Routines" (
  "id" SERIAL PRIMARY KEY,
  "workouts_id" int UNIQUE NOT NULL,
  "routines_id" int NOT NULL
);

CREATE TABLE "Quotes" (
  "id" SERIAL PRIMARY KEY,
  "author" varchar(75),
  "quote" text
);

ALTER TABLE "Users" ADD FOREIGN KEY ("id") REFERENCES "Routines" ("user_id");

ALTER TABLE "Workouts" ADD FOREIGN KEY ("exercise_id") REFERENCES "Exercises" ("id");

ALTER TABLE "Workouts" ADD FOREIGN KEY ("id") REFERENCES "Workouts_Routines" ("workouts_id");

ALTER TABLE "Workouts_Routines" ADD FOREIGN KEY ("routines_id") REFERENCES "Routines" ("id");
