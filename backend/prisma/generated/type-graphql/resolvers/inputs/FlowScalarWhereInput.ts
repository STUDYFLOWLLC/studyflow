import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumVisibilityNullableFilter } from "../inputs/EnumVisibilityNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("FlowScalarWhereInput", {
  isAbstract: true
})
export class FlowScalarWhereInput {
  @TypeGraphQL.Field(_type => [FlowScalarWhereInput], {
    nullable: true
  })
  AND?: FlowScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowScalarWhereInput], {
    nullable: true
  })
  OR?: FlowScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowScalarWhereInput], {
    nullable: true
  })
  NOT?: FlowScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FlowID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  CreatedById?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Body?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumVisibilityNullableFilter, {
    nullable: true
  })
  Visibility?: EnumVisibilityNullableFilter | undefined;
}
