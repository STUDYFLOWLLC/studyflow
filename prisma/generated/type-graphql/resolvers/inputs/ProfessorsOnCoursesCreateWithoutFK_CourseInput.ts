import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCreateNestedOneWithoutFK_CoursesInput } from "../inputs/ProfessorCreateNestedOneWithoutFK_CoursesInput";

@TypeGraphQL.InputType("ProfessorsOnCoursesCreateWithoutFK_CourseInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesCreateWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => ProfessorCreateNestedOneWithoutFK_CoursesInput, {
    nullable: false
  })
  FK_Professor!: ProfessorCreateNestedOneWithoutFK_CoursesInput;
}
