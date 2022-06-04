import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateNestedOneWithoutFK_ProfessorsInput } from "../inputs/CourseCreateNestedOneWithoutFK_ProfessorsInput";

@TypeGraphQL.InputType("ProfessorsOnCoursesCreateWithoutFK_ProfessorInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesCreateWithoutFK_ProfessorInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => CourseCreateNestedOneWithoutFK_ProfessorsInput, {
    nullable: false
  })
  FK_Course!: CourseCreateNestedOneWithoutFK_ProfessorsInput;
}
