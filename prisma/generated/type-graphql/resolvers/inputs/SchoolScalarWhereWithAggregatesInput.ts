import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SchoolScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SchoolScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SchoolScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SchoolScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchoolScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SchoolScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SchoolScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SchoolScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  SchoolID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  Name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  HasClassSupport?: BoolWithAggregatesFilter | undefined;
}