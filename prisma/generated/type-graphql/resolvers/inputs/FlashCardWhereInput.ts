import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FlashCardStackRelationFilter } from "../inputs/FlashCardStackRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("FlashCardWhereInput", {
  isAbstract: true
})
export class FlashCardWhereInput {
  @TypeGraphQL.Field(_type => [FlashCardWhereInput], {
    nullable: true
  })
  AND?: FlashCardWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardWhereInput], {
    nullable: true
  })
  OR?: FlashCardWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardWhereInput], {
    nullable: true
  })
  NOT?: FlashCardWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FlashCardID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackRelationFilter, {
    nullable: true
  })
  FK_FlashCardStack?: FlashCardStackRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_FlashCardStackID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  Position?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Front?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Back?: StringNullableFilter | undefined;
}
