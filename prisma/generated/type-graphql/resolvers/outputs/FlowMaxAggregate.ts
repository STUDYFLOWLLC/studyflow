import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowType } from "../../enums/FlowType";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.ObjectType("FlowMaxAggregate", {
  isAbstract: true
})
export class FlowMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlowID!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  LastOpened!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  UserEnteredDate!: Date | null;

  @TypeGraphQL.Field(_type => FlowType, {
    nullable: true
  })
  Type!: "LECTURE" | "DISCUSSION" | "NOTE" | "ASSIGNMENT" | "ASSESSMENT" | "SYNTHESIS" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Body!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  Trashed!: boolean | null;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  Visibility!: "HIDDEN" | "PRIVATE" | "PUBLIC" | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseOnTermID!: number | null;
}
