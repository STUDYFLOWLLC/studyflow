import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowType } from "../../enums/FlowType";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.InputType("FlowCreateManyFK_CourseOnTermInput", {
  isAbstract: true
})
export class FlowCreateManyFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlowID?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  LastOpened?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  UserEnteredDate?: Date | undefined;

  @TypeGraphQL.Field(_type => FlowType, {
    nullable: false
  })
  Type!: "LECTURE" | "DISCUSSION" | "NOTE" | "ASSIGNMENT" | "ASSESSMENT" | "SYNTHESIS";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Body?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  Trashed?: boolean | undefined;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  Visibility?: "HIDDEN" | "PRIVATE" | "PUBLIC" | undefined;
}
