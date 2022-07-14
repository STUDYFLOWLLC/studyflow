import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlowViewOrderByWithRelationInput } from "../../../inputs/FlowViewOrderByWithRelationInput";
import { FlowViewWhereInput } from "../../../inputs/FlowViewWhereInput";
import { FlowViewWhereUniqueInput } from "../../../inputs/FlowViewWhereUniqueInput";
import { FlowViewScalarFieldEnum } from "../../../../enums/FlowViewScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyFlowViewArgs {
  @TypeGraphQL.Field(_type => FlowViewWhereInput, {
    nullable: true
  })
  where?: FlowViewWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlowViewOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FlowViewOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowViewWhereUniqueInput, {
    nullable: true
  })
  cursor?: FlowViewWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [FlowViewScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"FlowViewID" | "CreatedTime" | "FK_FlowID" | "FK_UserID"> | undefined;
}
