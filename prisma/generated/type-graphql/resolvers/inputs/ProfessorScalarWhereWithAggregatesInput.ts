import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
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

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_SchoolID?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  Name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Email?: StringNullableWithAggregatesFilter | undefined;
}
