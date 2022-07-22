import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("AutomationLogMinAggregate", {
  isAbstract: true
})
export class AutomationLogMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  AutomationLogID!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  Time!: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  Success!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Message!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseOnTermAutomationID!: number | null;
}
