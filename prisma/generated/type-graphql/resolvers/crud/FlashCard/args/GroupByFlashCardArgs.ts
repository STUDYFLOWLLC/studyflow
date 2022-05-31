import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashCardOrderByWithAggregationInput } from "../../../inputs/FlashCardOrderByWithAggregationInput";
import { FlashCardScalarWhereWithAggregatesInput } from "../../../inputs/FlashCardScalarWhereWithAggregatesInput";
import { FlashCardWhereInput } from "../../../inputs/FlashCardWhereInput";
import { FlashCardScalarFieldEnum } from "../../../../enums/FlashCardScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFlashCardArgs {
  @TypeGraphQL.Field(_type => FlashCardWhereInput, {
    nullable: true
  })
  where?: FlashCardWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlashCardOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FlashCardOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"FlashCardID" | "CreatedTime" | "FK_FlashCardStackID" | "Position" | "Front" | "Back">;

  @TypeGraphQL.Field(_type => FlashCardScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FlashCardScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
