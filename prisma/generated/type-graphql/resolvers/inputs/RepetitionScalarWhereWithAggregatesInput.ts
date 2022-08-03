import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("RepetitionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class RepetitionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RepetitionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RepetitionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepetitionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RepetitionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepetitionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RepetitionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  RepetitionID?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_FlowID?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_FlashcardStackID?: StringNullableWithAggregatesFilter | undefined;
}
