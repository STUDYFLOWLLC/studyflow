import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BugReportOrderByWithRelationInput } from "../../../inputs/BugReportOrderByWithRelationInput";
import { BugReportWhereInput } from "../../../inputs/BugReportWhereInput";
import { BugReportWhereUniqueInput } from "../../../inputs/BugReportWhereUniqueInput";
import { BugReportScalarFieldEnum } from "../../../../enums/BugReportScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyBugReportArgs {
  @TypeGraphQL.Field(_type => BugReportWhereInput, {
    nullable: true
  })
  where?: BugReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BugReportOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BugReportOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BugReportWhereUniqueInput, {
    nullable: true
  })
  cursor?: BugReportWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BugReportScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"BugReportID" | "CreatedTime" | "DeletedTime" | "FK_UserID" | "Title" | "Body"> | undefined;
}
