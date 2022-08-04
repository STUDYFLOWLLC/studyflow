import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardStackOrderByWithAggregationInput } from "../../../inputs/FlashcardStackOrderByWithAggregationInput";
import { FlashcardStackScalarWhereWithAggregatesInput } from "../../../inputs/FlashcardStackScalarWhereWithAggregatesInput";
import { FlashcardStackWhereInput } from "../../../inputs/FlashcardStackWhereInput";
import { FlashcardStackScalarFieldEnum } from "../../../../enums/FlashcardStackScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFlashcardStackArgs {
  @TypeGraphQL.Field(_type => FlashcardStackWhereInput, {
    nullable: true
  })
  where?: FlashcardStackWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FlashcardStackOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"FlashcardStackID" | "CreatedTime" | "DeletedTime" | "FK_FlowID" | "Title" | "Description">;

  @TypeGraphQL.Field(_type => FlashcardStackScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FlashcardStackScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
