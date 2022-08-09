import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugReportCreateManyFK_UserInput } from "../inputs/BugReportCreateManyFK_UserInput";

@TypeGraphQL.InputType("BugReportCreateManyFK_UserInputEnvelope", {
  isAbstract: true
})
export class BugReportCreateManyFK_UserInputEnvelope {
  @TypeGraphQL.Field(_type => [BugReportCreateManyFK_UserInput], {
    nullable: false
  })
  data!: BugReportCreateManyFK_UserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
