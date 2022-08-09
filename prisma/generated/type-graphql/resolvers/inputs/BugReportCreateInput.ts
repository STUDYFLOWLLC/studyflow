import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFK_BugReportInput } from "../inputs/UserCreateNestedOneWithoutFK_BugReportInput";

@TypeGraphQL.InputType("BugReportCreateInput", {
  isAbstract: true
})
export class BugReportCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  BugReportID?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DeletedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  FixedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_BugReportInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_BugReportInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Body?: string | undefined;
}
