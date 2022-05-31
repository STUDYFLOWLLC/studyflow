import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashCardStackOrderByWithAggregationInput } from "../../../inputs/FlashCardStackOrderByWithAggregationInput";
import { FlashCardStackScalarWhereWithAggregatesInput } from "../../../inputs/FlashCardStackScalarWhereWithAggregatesInput";
import { FlashCardStackWhereInput } from "../../../inputs/FlashCardStackWhereInput";
import { FlashCardStackScalarFieldEnum } from "../../../../enums/FlashCardStackScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFlashCardStackArgs {
  @TypeGraphQL.Field(_type => FlashCardStackWhereInput, {
    nullable: true
  })
  where?: FlashCardStackWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FlashCardStackOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"FlashCardStackID" | "CreatedTime" | "FK_FlowID" | "FK_UserID" | "Title">;

  @TypeGraphQL.Field(_type => FlashCardStackScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FlashCardStackScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
