import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumTermTypeFilter } from "../inputs/EnumTermTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("TermScalarWhereInput", {
  isAbstract: true
})
export class TermScalarWhereInput {
  @TypeGraphQL.Field(_type => [TermScalarWhereInput], {
    nullable: true
  })
  AND?: TermScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermScalarWhereInput], {
    nullable: true
  })
  OR?: TermScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermScalarWhereInput], {
    nullable: true
  })
  NOT?: TermScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  TermID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTermTypeFilter, {
    nullable: true
  })
  TermType?: EnumTermTypeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  TermName?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  TermStartDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  TermEndDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_SchoolID?: IntNullableFilter | undefined;
}
