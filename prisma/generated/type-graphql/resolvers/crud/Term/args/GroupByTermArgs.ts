import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TermOrderByWithAggregationInput } from "../../../inputs/TermOrderByWithAggregationInput";
import { TermScalarWhereWithAggregatesInput } from "../../../inputs/TermScalarWhereWithAggregatesInput";
import { TermWhereInput } from "../../../inputs/TermWhereInput";
import { TermScalarFieldEnum } from "../../../../enums/TermScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTermArgs {
  @TypeGraphQL.Field(_type => TermWhereInput, {
    nullable: true
  })
  where?: TermWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TermOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TermOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TermScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"TermID" | "CreatedTime" | "TermType" | "TermName" | "TermStartDate" | "TermEndDate" | "FK_UserID">;

  @TypeGraphQL.Field(_type => TermScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TermScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
