import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("StudyGroupScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class StudyGroupScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [StudyGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: StudyGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: StudyGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [StudyGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: StudyGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  StudyGroupID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  Name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  FK_UserID?: IntWithAggregatesFilter | undefined;
}
