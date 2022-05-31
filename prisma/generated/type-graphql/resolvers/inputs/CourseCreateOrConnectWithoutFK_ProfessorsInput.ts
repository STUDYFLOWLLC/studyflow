import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutFK_ProfessorsInput } from "../inputs/CourseCreateWithoutFK_ProfessorsInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateOrConnectWithoutFK_ProfessorsInput", {
  isAbstract: true
})
export class CourseCreateOrConnectWithoutFK_ProfessorsInput {
  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: false
  })
  where!: CourseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutFK_ProfessorsInput, {
    nullable: false
  })
  create!: CourseCreateWithoutFK_ProfessorsInput;
}
