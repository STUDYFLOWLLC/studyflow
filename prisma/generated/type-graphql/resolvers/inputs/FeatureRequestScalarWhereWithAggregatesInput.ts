import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("FeatureRequestScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class FeatureRequestScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FeatureRequestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FeatureRequestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureRequestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FeatureRequestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FeatureRequestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FeatureRequestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  FeatureRequestID?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  DeletedTime?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  ImplementedTime?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  Title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  Body?: StringWithAggregatesFilter | undefined;
}
