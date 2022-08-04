import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateWithoutFK_TasksInput } from "../inputs/CourseOnTermCreateWithoutFK_TasksInput";
import { CourseOnTermUpdateWithoutFK_TasksInput } from "../inputs/CourseOnTermUpdateWithoutFK_TasksInput";

@TypeGraphQL.InputType("CourseOnTermUpsertWithoutFK_TasksInput", {
  isAbstract: true
})
export class CourseOnTermUpsertWithoutFK_TasksInput {
  @TypeGraphQL.Field(_type => CourseOnTermUpdateWithoutFK_TasksInput, {
    nullable: false
  })
  update!: CourseOnTermUpdateWithoutFK_TasksInput;

  @TypeGraphQL.Field(_type => CourseOnTermCreateWithoutFK_TasksInput, {
    nullable: false
  })
  create!: CourseOnTermCreateWithoutFK_TasksInput;
}
