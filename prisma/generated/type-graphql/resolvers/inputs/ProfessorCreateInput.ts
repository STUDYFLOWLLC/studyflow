import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateNestedOneWithoutFK_ProfessorsInput } from "../inputs/CourseCreateNestedOneWithoutFK_ProfessorsInput";

@TypeGraphQL.InputType("ProfessorCreateInput", {
  isAbstract: true
})
export class ProfessorCreateInput {
  @TypeGraphQL.Field(_type => CourseCreateNestedOneWithoutFK_ProfessorsInput, {
    nullable: true
  })
  FK_Course?: CourseCreateNestedOneWithoutFK_ProfessorsInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;
}
