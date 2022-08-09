import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugReportWhereInput } from "../inputs/BugReportWhereInput";

@TypeGraphQL.InputType("BugReportListRelationFilter", {
  isAbstract: true
})
export class BugReportListRelationFilter {
  @TypeGraphQL.Field(_type => BugReportWhereInput, {
    nullable: true
  })
  every?: BugReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => BugReportWhereInput, {
    nullable: true
  })
  some?: BugReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => BugReportWhereInput, {
    nullable: true
  })
  none?: BugReportWhereInput | undefined;
}
