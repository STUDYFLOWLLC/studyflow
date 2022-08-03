import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RepetitionOrderByWithAggregationInput } from "../../../inputs/RepetitionOrderByWithAggregationInput";
import { RepetitionScalarWhereWithAggregatesInput } from "../../../inputs/RepetitionScalarWhereWithAggregatesInput";
import { RepetitionWhereInput } from "../../../inputs/RepetitionWhereInput";
import { RepetitionScalarFieldEnum } from "../../../../enums/RepetitionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRepetitionArgs {
  @TypeGraphQL.Field(_type => RepetitionWhereInput, {
    nullable: true
  })
  where?: RepetitionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RepetitionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: RepetitionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepetitionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"RepetitionID" | "CreatedTime" | "FK_FlowID" | "FK_FlashcardStackID">;

  @TypeGraphQL.Field(_type => RepetitionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RepetitionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
