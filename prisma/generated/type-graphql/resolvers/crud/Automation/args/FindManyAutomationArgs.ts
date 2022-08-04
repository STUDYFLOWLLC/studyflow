import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AutomationOrderByWithRelationInput } from "../../../inputs/AutomationOrderByWithRelationInput";
import { AutomationWhereInput } from "../../../inputs/AutomationWhereInput";
import { AutomationWhereUniqueInput } from "../../../inputs/AutomationWhereUniqueInput";
import { AutomationScalarFieldEnum } from "../../../../enums/AutomationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyAutomationArgs {
  @TypeGraphQL.Field(_type => AutomationWhereInput, {
    nullable: true
  })
  where?: AutomationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AutomationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AutomationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AutomationWhereUniqueInput, {
    nullable: true
  })
  cursor?: AutomationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AutomationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"AutomationID" | "RefreshToken" | "FK_UserID"> | undefined;
}
