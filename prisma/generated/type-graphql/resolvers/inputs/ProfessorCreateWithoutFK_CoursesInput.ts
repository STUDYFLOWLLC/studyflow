import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolCreateNestedOneWithoutFK_ProfessorInput } from "../inputs/SchoolCreateNestedOneWithoutFK_ProfessorInput";

@TypeGraphQL.InputType("ProfessorCreateWithoutFK_CoursesInput", {
  isAbstract: true
})
export class ProfessorCreateWithoutFK_CoursesInput {
  @TypeGraphQL.Field(_type => SchoolCreateNestedOneWithoutFK_ProfessorInput, {
    nullable: true
  })
  FK_School?: SchoolCreateNestedOneWithoutFK_ProfessorInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Email?: string | undefined;
}
