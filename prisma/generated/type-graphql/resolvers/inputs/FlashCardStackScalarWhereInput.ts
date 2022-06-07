import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("FlashCardStackScalarWhereInput", {
  isAbstract: true
})
export class FlashCardStackScalarWhereInput {
  @TypeGraphQL.Field(_type => [FlashCardStackScalarWhereInput], {
    nullable: true
  })
  AND?: FlashCardStackScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackScalarWhereInput], {
    nullable: true
  })
  OR?: FlashCardStackScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackScalarWhereInput], {
    nullable: true
  })
  NOT?: FlashCardStackScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FlashCardStackID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_FlowID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Title?: StringNullableFilter | undefined;
}
