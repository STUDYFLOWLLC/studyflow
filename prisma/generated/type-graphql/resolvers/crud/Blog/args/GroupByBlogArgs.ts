import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogOrderByWithAggregationInput } from "../../../inputs/BlogOrderByWithAggregationInput";
import { BlogScalarWhereWithAggregatesInput } from "../../../inputs/BlogScalarWhereWithAggregatesInput";
import { BlogWhereInput } from "../../../inputs/BlogWhereInput";
import { BlogScalarFieldEnum } from "../../../../enums/BlogScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBlogArgs {
  @TypeGraphQL.Field(_type => BlogWhereInput, {
    nullable: true
  })
  where?: BlogWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BlogOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BlogOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"BlogID" | "CreatedTime" | "DeletedTime" | "FK_UserID" | "Title" | "Body">;

  @TypeGraphQL.Field(_type => BlogScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BlogScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
