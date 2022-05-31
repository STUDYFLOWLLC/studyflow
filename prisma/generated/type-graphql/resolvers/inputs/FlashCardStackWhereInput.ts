import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FlashCardListRelationFilter } from "../inputs/FlashCardListRelationFilter";
import { FlowRelationFilter } from "../inputs/FlowRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("FlashCardStackWhereInput", {
  isAbstract: true
})
export class FlashCardStackWhereInput {
  @TypeGraphQL.Field(_type => [FlashCardStackWhereInput], {
    nullable: true
  })
  AND?: FlashCardStackWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackWhereInput], {
    nullable: true
  })
  OR?: FlashCardStackWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackWhereInput], {
    nullable: true
  })
  NOT?: FlashCardStackWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FlashCardStackID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => FlowRelationFilter, {
    nullable: true
  })
  FK_Flow?: FlowRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_FlowID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  FK_User?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FlashCardListRelationFilter, {
    nullable: true
  })
  FK_Flashcards?: FlashCardListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Title?: StringNullableFilter | undefined;
}
