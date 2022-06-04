import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("FlashCardStackScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class FlashCardStackScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FlashCardStackScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FlashCardStackScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FlashCardStackScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FlashCardStackScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  FlashCardStackID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_FlowID?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Title?: StringNullableWithAggregatesFilter | undefined;
}
