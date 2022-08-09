import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FeatureRequestOrderByWithRelationInput } from "../../../inputs/FeatureRequestOrderByWithRelationInput";
import { FeatureRequestWhereInput } from "../../../inputs/FeatureRequestWhereInput";
import { FeatureRequestWhereUniqueInput } from "../../../inputs/FeatureRequestWhereUniqueInput";
import { FeatureRequestScalarFieldEnum } from "../../../../enums/FeatureRequestScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstFeatureRequestArgs {
  @TypeGraphQL.Field(_type => FeatureRequestWhereInput, {
    nullable: true
  })
  where?: FeatureRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FeatureRequestOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FeatureRequestOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FeatureRequestWhereUniqueInput, {
    nullable: true
  })
  cursor?: FeatureRequestWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [FeatureRequestScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"FeatureRequestID" | "CreatedTime" | "DeletedTime" | "FK_UserID" | "Title" | "Body"> | undefined;
}
