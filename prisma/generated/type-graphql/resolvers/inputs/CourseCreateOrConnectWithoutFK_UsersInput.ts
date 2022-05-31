import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutFK_UsersInput } from "../inputs/CourseCreateWithoutFK_UsersInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateOrConnectWithoutFK_UsersInput", {
  isAbstract: true
})
export class CourseCreateOrConnectWithoutFK_UsersInput {
  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: false
  })
  where!: CourseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutFK_UsersInput, {
    nullable: false
  })
  create!: CourseCreateWithoutFK_UsersInput;
}
