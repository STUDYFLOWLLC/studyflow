import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CourseOnUser } from "../models/CourseOnUser";
import { FlashCardStack } from "../models/FlashCardStack";
import { Flow } from "../models/Flow";
import { FlowTag } from "../models/FlowTag";
import { Visibility } from "../enums/Visibility";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UserID!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  SetupComplete!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SupabaseID!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Username?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ProfilePictureLink?: string | null;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  DefaultVisibility?: "HIDDEN" | "PRIVATE" | "PUBLIC" | null;

  FK_Courses?: CourseOnUser[];

  FK_Flows?: Flow[];

  FK_FlowTags?: FlowTag[];

  FK_FlashCardStacks?: FlashCardStack[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
