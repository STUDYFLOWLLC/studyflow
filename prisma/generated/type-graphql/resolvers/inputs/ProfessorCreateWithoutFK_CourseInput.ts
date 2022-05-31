import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ProfessorCreateWithoutFK_CourseInput", {
  isAbstract: true
})
export class ProfessorCreateWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;
}
