import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("BugReportWhereUniqueInput", {
  isAbstract: true
})
export class BugReportWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BugReportID?: string | undefined;
}
