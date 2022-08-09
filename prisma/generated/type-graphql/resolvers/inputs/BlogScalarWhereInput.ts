import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("BlogScalarWhereInput", {
  isAbstract: true
})
export class BlogScalarWhereInput {
  @TypeGraphQL.Field(_type => [BlogScalarWhereInput], {
    nullable: true
  })
  AND?: BlogScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogScalarWhereInput], {
    nullable: true
  })
  OR?: BlogScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogScalarWhereInput], {
    nullable: true
  })
  NOT?: BlogScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  BlogID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  DeletedTime?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Body?: StringFilter | undefined;
}
