import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("FlashcardStackScalarWhereInput", {
  isAbstract: true
})
export class FlashcardStackScalarWhereInput {
  @TypeGraphQL.Field(_type => [FlashcardStackScalarWhereInput], {
    nullable: true
  })
  AND?: FlashcardStackScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackScalarWhereInput], {
    nullable: true
  })
  OR?: FlashcardStackScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackScalarWhereInput], {
    nullable: true
  })
  NOT?: FlashcardStackScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  FlashcardStackID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  DeletedTime?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  FK_FlowID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Description?: StringFilter | undefined;
}
