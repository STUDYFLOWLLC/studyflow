import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CourseOnTerm } from "../models/CourseOnTerm";
import { FlashCardStack } from "../models/FlashCardStack";
import { Visibility } from "../enums/Visibility";
import { FlowCount } from "../resolvers/outputs/FlowCount";

@TypeGraphQL.ObjectType("Flow", {
  isAbstract: true
})
export class Flow {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FlowID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  FK_FlashCardStacks?: FlashCardStack[];

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Body?: string | null;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  Visibility?: "HIDDEN" | "PRIVATE" | "PUBLIC" | null;

  CourseOnTerm?: CourseOnTerm | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  courseOnTermCourseOnTermID?: number | null;

  @TypeGraphQL.Field(_type => FlowCount, {
    nullable: true
  })
  _count?: FlowCount | null;
}
