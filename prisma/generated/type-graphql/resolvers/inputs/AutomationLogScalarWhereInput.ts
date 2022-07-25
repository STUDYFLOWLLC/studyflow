import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("AutomationLogScalarWhereInput", {
  isAbstract: true
})
export class AutomationLogScalarWhereInput {
  @TypeGraphQL.Field(_type => [AutomationLogScalarWhereInput], {
    nullable: true
  })
  AND?: AutomationLogScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogScalarWhereInput], {
    nullable: true
  })
  OR?: AutomationLogScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogScalarWhereInput], {
    nullable: true
  })
  NOT?: AutomationLogScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  AutomationLogID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  Time?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  Success?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Message?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  FileID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_CourseOnTermAutomationID?: IntNullableFilter | undefined;
}
