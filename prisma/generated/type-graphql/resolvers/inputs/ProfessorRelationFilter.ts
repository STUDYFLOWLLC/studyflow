import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorWhereInput } from "../inputs/ProfessorWhereInput";

@TypeGraphQL.InputType("ProfessorRelationFilter", {
  isAbstract: true
})
export class ProfessorRelationFilter {
  @TypeGraphQL.Field(_type => ProfessorWhereInput, {
    nullable: true
  })
  is?: ProfessorWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProfessorWhereInput, {
    nullable: true
  })
  isNot?: ProfessorWhereInput | undefined;
}
