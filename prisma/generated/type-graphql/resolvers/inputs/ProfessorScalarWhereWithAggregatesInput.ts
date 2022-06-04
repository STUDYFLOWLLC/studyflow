import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ProfessorScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ProfessorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProfessorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProfessorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProfessorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProfessorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  ProfessorID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  Name?: StringWithAggregatesFilter | undefined;
}
