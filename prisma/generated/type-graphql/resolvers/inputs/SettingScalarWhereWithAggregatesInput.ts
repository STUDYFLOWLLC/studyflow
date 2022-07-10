import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("SettingScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SettingScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SettingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SettingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SettingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SettingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  SettingID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableWithAggregatesFilter, {
    nullable: true
  })
  HasSeenWelcomeMessage?: BoolNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  LastSeenWelcomeMessageAt?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  FK_UserID?: IntWithAggregatesFilter | undefined;
}
