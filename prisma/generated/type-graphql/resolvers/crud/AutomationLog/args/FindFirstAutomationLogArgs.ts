import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AutomationLogOrderByWithRelationInput } from "../../../inputs/AutomationLogOrderByWithRelationInput";
import { AutomationLogWhereInput } from "../../../inputs/AutomationLogWhereInput";
import { AutomationLogWhereUniqueInput } from "../../../inputs/AutomationLogWhereUniqueInput";
import { AutomationLogScalarFieldEnum } from "../../../../enums/AutomationLogScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAutomationLogArgs {
  @TypeGraphQL.Field(_type => AutomationLogWhereInput, {
    nullable: true
  })
  where?: AutomationLogWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AutomationLogOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AutomationLogWhereUniqueInput, {
    nullable: true
  })
  cursor?: AutomationLogWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AutomationLogScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"AutomationLogID" | "Time" | "Success" | "Message" | "FK_CourseOnTermAutomationID"> | undefined;
}
