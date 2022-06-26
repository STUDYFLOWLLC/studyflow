import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorWhereInput } from "../inputs/ProfessorWhereInput";

@TypeGraphQL.InputType("ProfessorListRelationFilter", {
  isAbstract: true
})
export class ProfessorListRelationFilter {
  @TypeGraphQL.Field(_type => ProfessorWhereInput, {
    nullable: true
  })
  every?: ProfessorWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorWhereInput, {
    nullable: true
  })
  some?: ProfessorWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorWhereInput, {
    nullable: true
  })
  none?: ProfessorWhereInput | undefined;
}
