import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateNestedManyWithoutFK_ProfessorInput } from "../inputs/CourseCreateNestedManyWithoutFK_ProfessorInput";

@TypeGraphQL.InputType("ProfessorCreateInput", {
  isAbstract: true
})
export class ProfessorCreateInput {
  @TypeGraphQL.Field(_type => CourseCreateNestedManyWithoutFK_ProfessorInput, {
    nullable: true
  })
  FK_Courses?: CourseCreateNestedManyWithoutFK_ProfessorInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Email?: string | undefined;
}
